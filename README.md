# MASTS-POE-PART-2

ST10451442
MASTS5111 – POE Part 2
1. Introduction
The mobile app for Christoffel’s represents a structured and elegant layout designed to showcase the culinary experience that Chef Christoffel offers. The app is intended to provide an intuitive interface for users to browse and explore a curated menu, offering seamless navigation and detailed information on dishes The app will update Christoffel’s menu in real-time, allowing him to quickly add or change dishes as needed.
2. Objectives of the Application
The application was designed with the following objectives:
•	Allow the chef to add new dishes.
•	Restrict dish categories (courses) to three specific options: starter, main, and dessert.
•	Enable the selection of dishes for checkout and calculate the total cost.
2.2 Features
The application includes the following key features:
1. Home Screen
•	Displays the current menu.
•	Allows the chef to add dishes and select items for checkout.
2. Selection Screen
•	Let’s the chef input dish details: name, description, course, and price.
3. Chef’s Menu
•	Validates course input, limiting choices to only starter, main, or dessert.
4. Checkout Screen
•	Displays selected dishes and calculates the total price.
3. Tools and Technologies Used
•	TypeScript: Ensures type safety and helps with debugging.
•	React Navigation: Manages navigation between screens.
•	React’s useState Hook: Handles state locally (e.g., dish list and selections).
•	Input Validation: Validates user input to prevent errors and ensure data integrity.

3.2 Screens Overview
3.2.1 Home Screen
•	Uses FlatList to dynamically render menu items.
•	TouchableOpacity allows chefs to select/deselect dishes.
•	Buttons for adding dishes and proceeding to checkout are included at the bottom.
3.2.2 Selection Screen
•	Uses TextInput for entering dish name, description, course, and price.
•	Validates that:
o	Course is one of: starter, main, or dessert.
o	Price is a positive number.
3.2.3 Checkout Screen
•	Summarizes selected dishes.
•	Shows the total price.
•	If no dishes are selected, an alert prompts the chef to select at least one.
3.4 Input Validation and Error Handling
•	All fields are required before adding a dish.
•	Specific validation rules:
o	Price must be a positive number.
o	Course must be one of the predefined options.
o	Alerts guide the chef to correct any input errors.

4. Challenges Faced
One major challenge during development was with the Android emulator, which kept crashing and did not run the application. This hindered testing and limited the ability to fully demonstrate app functionality.

5. Testing and Debugging
The application was intended to be tested on both Android and iOS simulators for compatibility. However, due to persistent emulator crashes, it could not be tested properly on Android. Debugging was attempted, but the issue persisted.

6. Conclusion
Although the app's structure and code were implemented, the application could not be successfully launched or demonstrated due to emulator issues. As a result, features such as adding dishes and navigating through screens could not be verified in a working state. Further troubleshooting is required to resolve the emulator issues and complete the testing process.

Referencing
Module Manual: MAST5112MM.docx
https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7B2159D610-F86A-47C0-8549-37C5497510CD%7D&file=MAST5112MM.docx&action=default&mobileredirect=true [Accessed 16 May 2025]
background images for restaurant websites - Search
https://www.bing.com/search?q=background+images+for+restaurant+websites&qs=SSA&pq=background+pictures+for+restaurant&sk=HS1&sc=12-34&cvid=E3015EEBFDA443E29B480C3890F25511&FORM=QBRE&sp=2&lq=0 [Accessed 17 May 2025]
Starters 
https://th.bing.com/th/id/OIP.fX6sbHmuHyVJI0Qs9L-zKAHaFj?pid=ImgDet&w=191&h=143&c=7 [Accessed 17 May 2025]
Main Course 
https://th.bing.com/th/id/R.fbed94e97c7360dc8a4f4c38fa3e3605?rik=96Uuve2aduQPkg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-UJNfY3-9NGE%2fVZoHbArFlFI%2fAAAAAAAAJSM%2fItsKYNgBKfU%2fs1600%2fDSC_2987.JPG&ehk=adUCBVc31VI%2ffmCY%2f2w42a%2flGCKSjHxLvanY5DaOKyY%3d&risl=&pid=ImgRaw&r=0 [ Accessed 17 May 2025]
Dessert 
https://images7.alphacoders.com/396/396289.jpg [Accessed 17 May 2025]
https://www.bing.com/search?q=react+native+code+and+toturials&cvid=074389ec0cf84dbdbf0a3b11963a95a5&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQkzNDMwNWowajSoAgiwAgE&FORM=ANAB01&PC=ASTS [Accessed 16 May 2025]


