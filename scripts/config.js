var game_config = `
{
    "prematch": [
        {
            "id": "scouter_name",
            "type": "text",
            "text": "紀錄者姓名",
            "default_value": "Wang"
        },
        {
            "id": "game_level",
            "type": "radio",
            "text": "比賽等級",
            "choices": {
                "pm": "練習賽",
                "qm": "資格賽",
                "sf": "準決賽",
                "f": "決賽"
            },
            "default_value": "qm"
        },
        {
            "id": "game_number",
            "type": "text",
            "text": "比賽場次",
            "default_value": "1"
        },
        {
            "id": "team_number",
            "type": "text",
            "text": "隊伍編號",
            "default_value": ""
        },
        {
            "id": "not_participated",
            "type": "checkbox",
            "text": "未上場比賽"
        }
    ],
    "auto": [
        {
            "id": "auto_taxi",
            "type": "checkbox",
            "text": "離開起始區域"
        },
        {
            "id": "auto_high_node",
            "type": "counter",
            "text": "High Node數量",
            "default_value": "0"
        },
        {
            "id": "auto_mid_node",
            "type": "counter",
            "text": "Mid Node數量",
            "default_value": "0"
        },
        {
            "id": "auto_low_node",
            "type": "counter",
            "text": "Low Node數量",
            "default_value": "0"
        },
        {
            "id": "auto_docked",
            "type": "checkbox",
            "text": "Docked<br>完全在上面但沒平衡or平衡但隊友碰到地"
        },
        {
            "id": "auto_engaged",
            "type": "checkbox",
            "text": "Engaged<br>平衡"
        }
    ],
    "teleop": [
        {
            "id": "teleop_high_node",
            "type": "counter",
            "text": "High Node數量",
            "default_value": "0"
        },
        {
            "id": "teleop_mid_node",
            "type": "counter",
            "text": "Mid Node數量",
            "default_value": "0"
        },
        {
            "id": "teleop_low_node",
            "type": "counter",
            "text": "Low Node數量",
            "default_value": "0"
        }
    ],
    "endgame": [
        {
            "id": "endgame_park",
            "type": "checkbox",
            "text": "Park<br>完全回到自身聯盟區域<br>但沒Dock or Engage"
        },
        {
            "id": "endgame_docked",
            "type": "checkbox",
            "text": "Docked<br>完全在上面但沒平衡or平衡但隊友碰到地"
        },
        {
            "id": "endgame_engaged",
            "type": "checkbox",
            "text": "Engaged<br>平衡"
        },
        {
            "id": "link",
            "type": "counter",
            "text": "聯盟總連線數量",
            "default_value": "0"
        },
        {
            "id": "disabled",
            "type": "checkbox",
            "text": "機器人一度完全靜止不動"
        },
        {
            "id": "cycletime",
            "type": "radio",
            "text": "平均循環時間",
            "choices": {
                "a": "慢(>20s)",
                "b": "平均(10~20s)",
                "c": "快(<10s)"
            },
            "default_value": "b"
        },
        {
            "id": "driver_defense",
            "type": "radio",
            "text": "車手防守技術",
            "choices": {
                "x": "無",
                "a": "1(壞)",
                "b": "2",
                "c": "3",
                "d": "4",
                "e": "5(好)"
            },
            "default_value": "x"
        },
        {
            "id": "driver_antidefense",
            "type": "radio",
            "text": "車手反防守技術",
            "choices": {
                "x": "無",
                "a": "1(壞)",
                "b": "2",
                "c": "3",
                "d": "4",
                "e": "5(好)"
            },
            "default_value": "x"
        },
        {
            "id": "comment",
            "type": "textarea",
            "text": "其他評論或無法記錄的部分"
        }
    ],
    "result": [
    ]
}`;