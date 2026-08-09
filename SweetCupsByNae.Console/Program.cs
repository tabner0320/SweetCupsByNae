Console.WriteLine("================================");
Console.WriteLine("     Sweet Cups by Nae");
Console.WriteLine("================================");
Console.WriteLine();
Console.WriteLine("1. View All Desserts");
Console.WriteLine("2. View Dessert by ID");
Console.WriteLine("3. Add Dessert");
Console.WriteLine("4. Update Dessert");
Console.WriteLine("5. Delete Dessert");
Console.WriteLine("6. Exit");
Console.WriteLine();

Console.Write("Select an option: ");
string? choice = Console.ReadLine();

switch (choice)
{
    case "1":
        Console.WriteLine("Viewing all desserts...");
        break;

    case "2":
        Console.WriteLine("Viewing dessert by ID...");
        break;

    case "3":
        Console.WriteLine("Adding a dessert...");
        break;

    case "4":
        Console.WriteLine("Updating a dessert...");
        break;

    case "5":
        Console.WriteLine("Deleting a dessert...");
        break;

    case "6":
        Console.WriteLine("Closing Sweet Cups by Nae.");
        break;

    default:
        Console.WriteLine("Invalid option. Please select 1 through 6.");
        break;
}