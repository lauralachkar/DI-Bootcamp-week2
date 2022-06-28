function printPattern(n)

{



    // Variable initialization

    let line_no = 1; // Line count


    // Loop to print desired pattern

    let curr_star = 0;

    for (let line_no = 1; line_no <= n; )

    {



        // If current star count is less than

        // current line number

        if (curr_star < line_no)

        {

            console.log("* ");

            curr_star++;

            continue;

        }


        // Else time to print a new line

        if (curr_star == line_no)

        {

            console.log("<br>");

            line_no++;

            curr_star = 0;

        }

    }

}


// Driver code

printPattern(7);





let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);

