from turtle import *

def draw_square(x, y):
    penup()
    goto(x, y)
    pendown()
    for _ in range(4):
        forward(100)
        left(90)


draw_square(100, 100)
draw_square(-300, 100)
draw_square(-300, -300)
draw_square(100, -300)

exitonclick()
