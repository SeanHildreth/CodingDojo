public class ProjectTest {
    public static void main(String[] args) {
        Project project = new Project();
        project.setName("Greeter");
        String projectName = project.getName();
        System.out.println(projectName);
        project.setDescription("This is a sample assignment that gives you a good overview of how OOP works in Java.");
        String projectDesc = project.getDescription();
        System.out.println(projectDesc);
        project.setInitialCost(999.99);
        String projectInitialCost = project.getInitialCost();
        System.out.println(projectInitialCost);
        String projectElevatorPitch = project.elevatorPitch();
        System.out.println(projectElevatorPitch);
        System.out.println(project.toString());


        Project project2 = new Project("Puzzling");
        String project2Name = project2.getName();
        System.out.println(project2Name);


        Project project3 = new Project("Hello World", "This is the first initial test assignment completed to introduce you to Java.");
        String project3ElevatorPitch = project3.elevatorPitch();
        System.out.println(project3ElevatorPitch);


        Portfolio portfolio = new Portfolio(project);
        portfolio.addProject(new Project("FizzBuzz", "This is a simple FizzBuzz program.", 888.88));
        System.out.println(portfolio.showPortfolio());
        String cost = portfolio.getPortfolioCost();
        System.out.println(cost);
    }
}