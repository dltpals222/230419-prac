import math

def exampleOne(a):
    if isinstance(a, int):
        if (a-math.floor(a)) != 0:
            raise ValueError('정수를 입력해야 합니다.')
    else:
        raise ValueError('정수를 입력해야 합니다.')
    return a

print(exampleOne(4))