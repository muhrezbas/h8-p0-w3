function balikString(kata) {
  // you can only write your code here! 
  var result = ""
  for(var i = kata.length-1; i>=0; i--){
        result = result + kata[i]
    
    
    }
    
    return result
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]