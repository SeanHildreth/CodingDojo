import java.util.ArrayList;
public class Portfolio {
    private ArrayList<Project> projects = new ArrayList<Project>();
    public Portfolio() {}
    public Portfolio(Project project){
        projects.add(project);
    }
    public void addProject(Project project) {
        projects.add(project);
    }
    public ArrayList showPortfolio() {
        return projects;
    }
    public String getPortfolioCost() {
        double cost = 0;
        for (int i = 0; i < projects.size(); i++) {
            double a = projects.get(i).getCost();
            cost = cost + a;
        }
        return "Total Portfolio Cost: $" + cost;
    }
}