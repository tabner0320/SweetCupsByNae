namespace SweetCupsByNae.Api.Models;

public class Order
{
    public int Id { get; set; }

    public string CustomerName { get; set; } = "";

    public string CustomerPhone { get; set; } = "";

    public DateTime PickupDate { get; set; }

    public string OrderNotes { get; set; } = "";

    public List<OrderItem> Items { get; set; } = new();
}

public class OrderItem
{
    public string Product { get; set; } = "";

    public decimal Price { get; set; }
}