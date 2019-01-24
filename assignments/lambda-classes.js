// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
}
}



class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguag;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}



class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
}

    listsSubjects() {
        return `${this.favSubjects}`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}



class ProjectMananger extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }

    standUp(channel) {
       return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


  //-------------vvvvvvvvv-------------Objects------------vvvvvvvv----------------------

  const Joe = new Person({
    name: 'joe',
    age: 42,
    location: 'portland',
    gender: 'male'
  });

  const Bob = new Person({
    name: 'bob',
    age: 24,
    location: 'switzerland',
    gender: 'male'
  });



  const Josh = new Instructor({
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Big boss'
  });

  const Ryan = new Instructor({
    specialty: 'CSS',
    favLanguage: 'Javascript',
    catchPhrase: 'Lets get into it!'
  });



  const Jawad = new Student({
    previousBackground: 'college',
    className: 'Web17',
    favSubjects: ['HTML', 'CSS']
  });

  const Randy = new Student({
    previousBackground: 'McDonalds',
    className: 'Web17',
    favSubjects: ['JS', 'Python']
  });



  const Jordan = new ProjectManager({
    gradClassName: 'CS10',
    favInstructor: 'Josh'
  });

  const Guy = new ProjectManager({
    gradClassName: 'CS90',
    favInstructor: 'Ryan'
  });