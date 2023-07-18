import re
import os
import execjs
import requests
import json

session = requests.session()
js = execjs.compile(open(r'qq_music.js', 'r', encoding='utf-8').read())
if not os.path.exists("songs"):
    os.mkdir("songs")
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82"
}
base_url = 'https://y.qq.com/n/ryqq/player'
detail_url = 'https://y.qq.com/n/ryqq/songDetail/'
url = "https://u.y.qq.com/cgi-bin/musics.fcg"
g_tk_url = 'https://y.qq.com/ryqq/js/vendor.chunk.'
params = {
    "sign": ""
}
data = {
    "comm": {
        "cv": 4747474,
        "ct": 24,
        "format": "json",
        "inCharset": "utf-8",
        "outCharset": "utf-8",
        "notice": 0,
        "platform": "yqq.json",
        "needNewCode": 1,
        "uin": 0,
        "g_tk_new_20200303": "",
        "g_tk": ""
    },
    "req_1": {
        "module": "vkey.GetVkeyServer",
        "method": "CgiGetVkey",
        "param": {
            "guid": "",
            "songmid": [
                ""
            ],
            "songtype": [
                0
            ],
            "uin": "0",
            "loginflag": 1,
            "platform": "20"
        }
    },
    "req_2": {
        "module": "music.musicasset.SongFavRead",
        "method": "IsSongFanByMid",
        "param": {
            "v_songMid": [
                ""
            ]
        }
    },
    "req_3": {
        "module": "music.musichallSong.PlayLyricInfo",
        "method": "GetPlayLyricInfo",
        "param": {
            "songMID": "",
            "songID": "",
        }
    },
    "req_4": {
        "method": "GetCommentCount",
        "module": "music.globalComment.GlobalCommentRead",
        "param": {
            "request_list": [
                {
                    "biz_type": 1,
                    "biz_id": "",
                    "biz_sub_type": 0
                }
            ]
        }
    },
    "req_5": {
        "module": "music.musichallAlbum.AlbumInfoServer",
        "method": "GetAlbumDetail",
        "param": {
            "albumMid": ""
        }
    },
    "req_6": {
        "module": "vkey.GetVkeyServer",
        "method": "CgiGetVkey",
        "param": {
            "guid": "",
            "songmid": [
                ""
            ],
            "songtype": [
                0
            ],
            "uin": "0",
            "loginflag": 1,
            "platform": "20"
        }
    }
}

def get_video_url(songmid, params ,data):
    response = requests.get(base_url, headers=headers)
    g_tk_url_ = g_tk_url + re.findall('src="/ryqq/js/vendor.chunk.(.*?)">', response.text)[0]
    response = requests.get(g_tk_url_, headers=headers)
    g_tk = re.findall('var t,n=(.*?);', response.text)[0]

    response = requests.get(detail_url + songmid, headers=headers).text
    songid = re.findall('"id":(.*?),"ctime":"', response)[0]
    albumMid = re.findall(',"albumMid":"(.*?)","info":', response)[0]
    name = re.findall(r'<title>(.*?)</title>', response)[0]
    name = name.replace(" ", "").replace("\n", "").replace("/", ";")
    data["comm"]["g_tk_new_20200303"] = int(g_tk)
    data["comm"]["g_tk"] = int(g_tk)
    data["req_1"]["param"]["songmid"][0] = songmid
    data["req_2"]["param"]["v_songMid"][0] = songmid
    data["req_3"]["param"]["songMID"] = songmid
    data["req_3"]["param"]["songID"] = int(songid)
    data["req_4"]["param"]["request_list"][0]["biz_id"] = songid
    data["req_5"]["param"]["albumMid"] = albumMid
    data["req_6"]["param"]["songmid"][0] = songmid
    guid1 = js.call('get_guid')
    guid2 = js.call('get_guid')
    data['req_1']['param']['guid'] = guid1
    data['req_6']['param']['guid'] = guid2

    sign = js.call('sign', g_tk, songmid, songid, albumMid, guid1, guid2)
    params['sign'] = sign
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, params=params, data=data)
    response = json.loads(response.text)
    download_url = 'https://dl.stream.qqmusic.qq.com/' + response['req_6']['data']['midurlinfo'][0]['purl']
    return name, download_url

def download_video(songmid, params ,data):
    name, url = get_video_url(songmid, params, data)
    content = requests.get(url).content
    print(f"{name}开始下载, {url}")
    with open(f"./songs/{name}.mp3", mode="wb") as f:
        f.write(content)
        print(f"{name}下载完成")

def main():
    songmid_list = [
        '001mckoZ1cS1Xt',
        '001mckoZ1cS1Xt',
        '001mckoZ1cS1Xt',
    ]
    for id in songmid_list:
        download_video(id, params, data)


if __name__ == '__main__':
    main()