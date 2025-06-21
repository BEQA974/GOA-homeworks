from turtle import*
def draw_square(x_cords,y_cords):
    penup()
    goto(x_cords,y_cords)
    pendown()


for i in range(4):
    forward(200)
    left(90)


draw_square(100,100)
draw_square(-300,100)
draw_square(-300,-300)
draw_square(100,-300)



exitonclick()