import re
import os
import execjs
import requests
import json
import os
import copy
import aiohttp
import aiofiles
import asyncio

js = execjs.compile(open(r'qq_music.js', 'r', encoding='utf-8').read())
loop = asyncio.get_event_loop()

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

async def get_video_url(songmid, session, params ,data):
    async with session.get(base_url, headers=headers) as res:
        g_tk_url_ = g_tk_url + re.findall('src="/ryqq/js/vendor.chunk.(.*?)">', await res.text())[0]
    async with session.get(g_tk_url_, headers=headers) as res:
        g_tk = re.findall('var t,n=(.*?);', await res.text())[0]
    async with session.get(detail_url + songmid, headers=headers) as res:
        songid = re.findall('"id":(.*?),"ctime":"', await res.text())[0]
        albumMid = re.findall(',"albumMid":"(.*?)","info":', await res.text())[0]
        name = re.findall(r'<title>(.*?)</title>', await res.text())[0]
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
    sign = await loop.run_in_executor(None, js.call, 'sign', g_tk, songmid, songid, albumMid, guid1, guid2)
    params['sign'] = sign
    data = json.dumps(data, separators=(',', ':'))
    async with session.post(url, headers=headers, params=params, data=data) as res:
        response = await res.text()
        response = json.loads(response)
        download_url = 'https://dl.stream.qqmusic.qq.com/' + response['req_6']['data']['midurlinfo'][0]['purl']
    return name, download_url

async def download_video(songmid, session, params ,data):
    name, url = await get_video_url(songmid, session, params ,data)
    print(f"{name}开始下载, {url}")
    async with aiofiles.open(f"./songs/{name}.mp4", mode="wb") as f:
        async with session.get(url) as res:
            await f.write(await res.content.read())
            print(f"{name}下载完成")

async def main():
    async with aiohttp.ClientSession() as session:
        songmid_list = [
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
            '001mckoZ1cS1Xt',
        ]
        tasks = [asyncio.create_task(download_video(id, session, copy.deepcopy(params), copy.deepcopy(data))) for id in songmid_list]
        await asyncio.wait(tasks)


if __name__ == '__main__':
    loop.run_until_complete( main() )
