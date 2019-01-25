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
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `today we are learning about ${subject}`;
    }

    grade(subject) {
        return `${Student.name} receives a perfect score on ${subject}`;
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



class ProjectManager extends Instructor {
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
    name: 'Josh',
    age: 32,
    location: 'AZ',
    gender: 'male',
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Big boss'
  });

  const Ryan = new Instructor({
    name: 'Ryan',
    age: 36,
    location: 'CA',
    gender: 'male',
    specialty: 'CSS',
    favLanguage: 'Javascript',
    catchPhrase: 'Lets get into it!'
  });



  const Jawad = new Student({
    name: 'Jawad',
    age: 18,
    location: 'OR',
    gender: 'male',
    previousBackground: 'college',
    className: 'Web17',
    favSubjects: ['HTML', 'CSS']
  });


  const Randy = new Student({
    name: 'Randy',
    age: 21,
    location: 'CA',
    gender: 'male',
    previousBackground: 'McDonalds',
    className: 'Web17',
    favSubjects: ['JS', 'Python']
  });



  const Jordan = new ProjectManager({
    name: 'Jordan',
    age: 26,
    location: 'CA',
    gender: 'male',
    specialty: 'JS',
    favLanguage: 'Javascript',
    catchPhrase: 'How was your day?',
    gradClassName: 'CS10',
    favInstructor: 'Josh'
  });

  const Guy = new ProjectManager({
    name: 'Guy',
    age: 85,
    location: 'CA',
    gender: 'male',
    specialty: 'Node.js',
    favLanguage: 'Javascript',
    catchPhrase: 'Jet fuel cant melt steel beams',
    gradClassName: 'CS90',
    favInstructor: 'Ryan'
  });



  /* Uncomment to see results (all work) ----------------------------

  console.log(Joe);
  console.log(Bob);
  console.log(Josh);
  console.log(Ryan);
  console.log(Jawad);
  console.log(Randy);
  console.log(Jordan);
  console.log(Guy);
  */

 