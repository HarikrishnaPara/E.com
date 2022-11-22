'getting wrong credientials
sSheetName = "InvalidCredientials" @@ script infofile_;_ZIP::ssf7.xml_;_
'calling login function
Login()
'assersion
If Browser("Demo Web Shop").Page("Demo Web Shop. Login").WebElement("Login was unsuccessful.").Exist then @@ script infofile_;_ZIP::ssf9.xml_;_
    Browser("Demo Web Shop").Page("Demo Web Shop").Image("Tricentis Demo Web Shop").Click @@ script infofile_;_ZIP::ssf12.xml_;_
End If

 @@ script infofile_;_ZIP::ssf5.xml_;_
