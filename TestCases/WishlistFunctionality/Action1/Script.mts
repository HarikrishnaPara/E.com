sSheetName = "Sheet1"

Login()

Browser("Demo Web Shop").Page("Demo Web Shop").Link("Jewelry").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop. Jewelry").Image("Picture of Black & White").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop. Black &").WebButton("Add to wishlist").Click @@ script infofile_;_ZIP::ssf3.xml_;_
If Browser("Demo Web Shop").Page("Demo Web Shop. Black &").Link("wishlist").Exist Then
	Browser("Demo Web Shop").Page("Demo Web Shop. Black &").Image("Tricentis Demo Web Shop").Click
End If


Logout()


