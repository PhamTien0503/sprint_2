import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
class Student implements Serializable {
    private String name;
    private String address;

    public Student(String name, String address) {
        this.name=name;
        this.address=address;
    }
}
public class Main {

    public static void main(String[] args) throws IOException {
        Student student1=new Student("Hoang", "adb");
        Student student2=new Student("Nang", "addfdsfb");
        Student student3=new Student("NhanKute", "Ly luom");
        List<Student>studentList=new ArrayList<>();
        studentList.add(student1);
        studentList.add(student2);
        studentList.add(student3);
       FileOutputStream fileOutputStream=new FileOutputStream("src/data.scv");
       ObjectOutputStream objectOutputStream=new ObjectOutputStream(fileOutputStream);
        for (Student st:studentList) {
            objectOutputStream.writeObject(st);
        }
    }
}