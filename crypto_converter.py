print("Добро пожаловать в конвертер криптовалют!")

rates = {
    "BTC": 65000,
    "ETH": 3200,
    "USDT": 1
}

amount = float(input("Введите сумму: "))
currency = input("Введите валюту (BTC, ETH, USDT): ").upper()
