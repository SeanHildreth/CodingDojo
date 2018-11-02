public class Project {
    public static String newline = System.getProperty("line.separator");
    private String name;
    private String description;
    private Double initialCost;
    public Project() {}
    public Project(String name) {
        this.name = name;
    }
    public Project(String name, String description) {
        this.name = name;
        this.description = description;
    }
    public Project(String name, String description, Double cost) {
        this.name = name;
        this.description = description;
        initialCost = cost;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getInitialCost() {
        return "$" + initialCost;
    }
    public Double getCost() {
        return initialCost;
    }
    public void setInitialCost(Double cost) {
        initialCost = cost;
    }
    public String elevatorPitch() {
        return name + " ($" + initialCost + ")" + " : " + description;
    }
    @Override
    public String toString() {
        return newline + getClass().getSimpleName() + newline + "Name: " + name + newline + "Description: " + description + newline + "Cost: $" + initialCost;
    }

}