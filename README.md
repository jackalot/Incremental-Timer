This will be a timer that increments 5 minutes
Plan
/*
Create HTML
test all links working together IE scripts, styles
on index html make a p tag that has the class name: "timer"
also make a button to start and stop timer
on scripts, get the timer with query selector
also get the buttons
add event listeners
in those event listeners, do a setInterval for the below function
make a function
{
    in that function, make a paramater called count
    while count > 0
        make count equate how much time we got by doing the math for hours, minutes, and seconds
        make that timer text = our hour minutes and seconds
        subtract count by one
        if ( count is > 0)
        {
            subtract 1 and continue
        }
        else {
           play a sound efect
        }
}
apply the above function to the buttons