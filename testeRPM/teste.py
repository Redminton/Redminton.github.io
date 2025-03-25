import serial
import time

# Configurar a porta COM (ajuste conforme necessário)
porta = "COM5"  # Exemplo para Windows. No Linux pode ser "/dev/ttyUSB0"
baud_rate = 115200  # Alguns dispositivos usam 9600

try:
    # Abrir a conexão serial
    with serial.Serial(porta, baud_rate, timeout=1) as ser:
        ser.write(b"AT Z\r")  # Reinicia o scanner
        time.sleep(1)
        ser.write(b"AT SP 0\r")  # Configura protocolo automático
        time.sleep(1)

        while True:
            ser.write(b"010C\r")  # Comando OBD2 para RPM
            time.sleep(1)  # Espera 1 segundo entre leituras
            
            resposta = ser.readline().decode("utf-8", errors="ignore").strip()
            if resposta:
                print("Resposta OBD2:", resposta)
except Exception as e:
    print("Erro:", e)
