import time

print("Iniciando Contagem Regressiva\n")

time.sleep(1)
print(".")
time.sleep(1)
print(".")
time.sleep(1)
print(".")

for i in range(60, 0, -1):
    time.sleep(1)
    print("{0}s".format(i))

time.sleep(1)
print(".")
print(".")
print(".")

print("\nBUM!")