'getting parametarized values @@ script infofile_;_ZIP::ssf4.xml_;_
sSheetName = "Sheet1"


Login() @@ script infofile_;_ZIP::ssf8.xml_;_
'assertion @@ hightlight id_;_789348_;_script infofile_;_ZIP::ssf13.xml_;_
If Browser("Demo Web Shop").Page("Demo Web Shop").Link("harikrishnapara145@gmail.com").Exist Then
	Browser("Demo Web Shop").Page("Demo Web Shop").Image("Tricentis Demo Web Shop").Click @@ script infofile_;_ZIP::ssf16.xml_;_
End If

Logout()
 @@ script infofile_;_ZIP::ssf15.xml_;_







