import speedtest
import threading

def run_speedtest():
    st = speedtest.Speedtest()
    while True:
        download_speed = st.download() / 1_000_000
        upload_speed = st.upload() / 1_000_000
        print(f"Download Speed: {download_speed:.2f} Mbps | Upload Speed: {upload_speed:.2f} Mbps", flush=True)

# 🔥 20 Threads स्टार्ट करें
threads = []
for _ in range(10):
    thread = threading.Thread(target=run_speedtest, daemon=True)
    thread.start()
    threads.append(thread)

# 🔥 Infinite Loop (स्क्रिप्ट बंद न हो)
while True:
    pass
