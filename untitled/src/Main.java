import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Student student=new Student("Tien",28,4);
        Student student1=new Student("An",17,2);
        Student student2=new Student("An",31,7);
        Student student3=new Student("Sy",50,10);
        List<Student> studentList=new ArrayList<>();
        studentList.add(student);
        studentList.add(student1);
        studentList.add(student2);
        studentList.add(student3);
        Collections.sort(studentList, (o1, o2) -> o1.getMark()-o2.getMark());
        Collections.sort(studentList, (o1, o2) -> {
            if (o1.getMark()-o2.getMark()==0){
                return o1.getAge()-o2.getAge();
            }
            return o1.getMark()-o2.getMark();
        });

        System.out.println(studentList);
    }
}

