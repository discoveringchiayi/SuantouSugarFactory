var APP_DATA = {
  "scenes": [
    {
      "id": "0-station",
      "name": "station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": -1.8434517378431305,
        "pitch": -0.07230382009196212,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.0964198515460177,
          "pitch": 0.014056993660650718,
          "rotation": 7.853981633974483,
          "target": "2-station_side"
        },
        {
          "yaw": -0.7483702708745952,
          "pitch": 0.04392786902937296,
          "rotation": 0,
          "target": "1-train"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.191316711285335,
          "pitch": -0.24544823352988487,
          "title": "蒜頭糖廠五分車站",
          "text": "建於 1930 年（昭和5五年）<div>為典型木造站房</div>"
        }
      ]
    },
    {
      "id": "1-train",
      "name": "train",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.6960479711622156,
          "pitch": -0.1985992745258418,
          "title": "五分車",
          "text": "五分車的軌距為762公釐，約國際標準軌距1435公釐的一半，故稱「五分車」。"
        }
      ]
    },
    {
      "id": "2-station_side",
      "name": "station_side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": 3.115279417738993,
        "pitch": 0.04486381178655563,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.3999184565504628,
          "pitch": 0.01533643163428522,
          "rotation": 4.71238898038469,
          "target": "0-station"
        },
        {
          "yaw": -1.5216971777275567,
          "pitch": 0.006140895608044872,
          "rotation": 7.853981633974483,
          "target": "3-station_back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.088659009647401,
          "pitch": 0.002279348516591284,
          "title": "甘蔗",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-station_back",
      "name": "station_back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": 0.25111152565674466,
        "pitch": -0.06257551762618441,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.049870189236394,
          "pitch": -0.04914055017709984,
          "rotation": 4.71238898038469,
          "target": "2-station_side"
        },
        {
          "yaw": 1.9764379243442063,
          "pitch": -0.019362761097333703,
          "rotation": 0,
          "target": "4-torii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-torii",
      "name": "torii",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0058912647114990335,
          "pitch": -0.05590829970826405,
          "rotation": 0,
          "target": "7-sun-yat-sen"
        },
        {
          "yaw": 2.2532552928776237,
          "pitch": 0.02557383847690886,
          "rotation": 4.71238898038469,
          "target": "3-station_back"
        },
        {
          "yaw": -1.6209965549278813,
          "pitch": 0.03293935915624857,
          "rotation": 0,
          "target": "5-dormitory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dormitory",
      "name": "dormitory",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": -0.03112922163216325,
        "pitch": -0.02276046575648749,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.4926956204848842,
          "pitch": 0.021197407726408102,
          "rotation": 0,
          "target": "3-station_back"
        },
        {
          "yaw": -1.1263673366461813,
          "pitch": -0.005100231637086949,
          "rotation": 1.5707963267948966,
          "target": "6-temple"
        },
        {
          "yaw": -2.150045320009193,
          "pitch": 0.03932425853711763,
          "rotation": 4.71238898038469,
          "target": "4-torii"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08421913498695588,
          "pitch": -0.1534409434304589,
          "title": "日式宿舍群",
          "text": "為台糖舊有的宿舍，位在糖廠內部"
        }
      ]
    },
    {
      "id": "6-temple",
      "name": "temple",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3160642178427135,
          "pitch": -0.012087075567457362,
          "rotation": 4.71238898038469,
          "target": "5-dormitory"
        },
        {
          "yaw": 1.6058806550025064,
          "pitch": -0.013858935725700405,
          "rotation": 0,
          "target": "12-shelter"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4151937111324564,
          "pitch": -0.029053577432904376,
          "title": "笑眯眯懸絲偶劇團",
          "text": "<br>"
        },
        {
          "yaw": -0.22733224310309197,
          "pitch": -0.2705669749298387,
          "title": "糖廠配天宮",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "7-sun-yat-sen",
      "name": "Sun Yat-sen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": 0.0035618964326395997,
        "pitch": -0.2528162346551781,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.010344346756897,
          "pitch": 0.4157641132191614,
          "rotation": 0,
          "target": "4-torii"
        },
        {
          "yaw": 0.5341682631503826,
          "pitch": 0.011326892067582861,
          "rotation": 5.497787143782138,
          "target": "8-sun-yat-sen2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sun-yat-sen2",
      "name": "Sun Yat-sen2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": -0.06390740082538038,
        "pitch": 0.06498466098991074,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.7531603932812416,
          "pitch": 0.01910841288032472,
          "rotation": 7.0685834705770345,
          "target": "7-sun-yat-sen"
        },
        {
          "yaw": -0.1096597126923573,
          "pitch": 0.29578300514163836,
          "rotation": 6.283185307179586,
          "target": "9-torii_back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-torii_back",
      "name": "torii_back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6205265874947568,
          "pitch": -0.021804942358063073,
          "rotation": 1.5707963267948966,
          "target": "10-torii_side"
        },
        {
          "yaw": 0.6988392285044895,
          "pitch": -0.013813107677600911,
          "rotation": 11.780972450961727,
          "target": "8-sun-yat-sen2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-torii_side",
      "name": "torii_side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": -1.486371308478038,
        "pitch": -0.01576816055811925,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.4514640315320815,
          "pitch": -0.01445681304689117,
          "rotation": 4.71238898038469,
          "target": "9-torii_back"
        },
        {
          "yaw": -1.6407685920063706,
          "pitch": 0.03934960462253834,
          "rotation": 0,
          "target": "11-torii_side2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.717745178123776,
          "pitch": -0.06674765659943915,
          "title": "防空洞",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "11-torii_side2",
      "name": "torii_side2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": -1.257190693734593,
        "pitch": -0.034549043419559666,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.6844838708818548,
          "pitch": 0.04548543026763241,
          "rotation": 0,
          "target": "10-torii_side"
        },
        {
          "yaw": 0.020169435353961873,
          "pitch": 0.014730882542647095,
          "rotation": 0,
          "target": "4-torii"
        },
        {
          "yaw": -1.4545638968260448,
          "pitch": 0.07043559391084031,
          "rotation": 5.497787143782138,
          "target": "3-station_back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-shelter",
      "name": "shelter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1376,
      "initialViewParameters": {
        "yaw": -0.02570734281086473,
        "pitch": 0.05376740538355129,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.5598063606842718,
          "pitch": -0.06928794564474217,
          "rotation": 1.5707963267948966,
          "target": "5-dormitory"
        },
        {
          "yaw": 2.565522555561321,
          "pitch": -0.07376777728526918,
          "rotation": 4.71238898038469,
          "target": "6-temple"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.04885396069303383,
          "pitch": -0.02329612972791928,
          "title": "防空洞",
          "text": "磚造圓管型防空洞，<div>形式較為簡易、臨時避難用。</div>"
        }
      ]
    }
  ],
  "name": "蒜頭糖廠",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
