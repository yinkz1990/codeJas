function truncateString(str, num) {
    if(str.length > num){// Clear out that junk in your trunk
      console.log(str.slice(0 , num) + "...");
    }
    else 
    {
      console.log(str);
    }
    }
    truncateString("A-tisket a-tasket A green and yellow basket", 8);
    