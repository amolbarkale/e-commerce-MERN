// // need of state management

body: {
  div: {
    count = 1;
    h1: "counter 0";
    button: {
      onClick: () => {
        count++;
      };
    }
  }
}

// here we are increamenting the count of counter but we are not notifying it to the count in h1 to update this value so here use state is coming the picture

