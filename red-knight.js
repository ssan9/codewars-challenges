// Red Knight is chasing two pawns. Which pawn will be caught, and where?

// Input / Output
// Input will be two integers:

// N / n (Ruby) vertical position of Red Knight (0 or 1).
// P / p (Ruby) horizontal position of two pawns (between 2 and 1000000).
// Output has to be a tuple (python, haskell, Rust, prolog, C#), an array (javascript, ruby), an object (java), or a structure (C) with:

// "Black" or "White" - which pawn was caught
// Where it was caught (horizontal position)

// Input = 0, 4
// Output = ["White", 8]

// Notes
// Red Knight will always start at horizontal position 0.
// The black pawn will always be at the bottom (vertical position 1).
// The white pawn will always be at the top (vertical position 0).
// The pawns move first, and they move simultaneously.
// Red Knight moves 2 squares forward and 1 up or down.
// Pawns always move 1 square forward.
// Both pawns will start at the same horizontal position.

function redKnight(N, P) {
  (N + P) % 2 == 0 ? N = 'White' : N = 'Black';
  P = P * 2;
  return [N, P];
}


// function redKnight(N, P) {
//   console.log("starting = " + N, P)
  
//   // N start Knight ( 0 || 1)
//   // P black && white distance to Knight ( 8 )
//   let knight = 0; // 0
//   let black; // 1 
//   let white; // 0

//   const togglePawn = () => {
//     if (N === 1) {
//      N = 0
//     } 
//     else N = 1
// //     console.log("togglePawn triggered")
    
     
//   }
  
//   // while knight[i] !== pawn[i] => { knight moves 2 steps, opposite color; pawn moves 1 step } else see knight 0 or 1
 
//   while (knight !== P || knight < P) {
//     P+=1;
//     knight+=2;
   
// //     console.log("before toggle = "+ N + "Knight = " + knight , "P = " + P)
//     togglePawn(N);
// //     console.log("after toggle = " + N + "Knight = " + knight , "P = " + P)
    
//   }
//   console.log("outside while loop N = " + N +", P =" + P , "Pawn white or black = " + N)
//   return (N === 0) ? ["White", knight] : ["Black", knight];
// }

// function redKnight(N, P) {
//   let n = 0
//   while (n !== P) {
//     P += 1
//     n += 2
//     N = -N + 1
//   }
//   return [N ? 'Black' : 'White', n]
// }