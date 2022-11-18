const users = [
    {
        id:'1',
        firstname: "Colby",
        lastname: "Berger",
        email: "Colbyx20@knights.ucf.edu",
        privilege: 1,
        confirmation: true,
        group: "Senior Design Scheduler"
    },
    {
        id:'2',
        firstname: "Andy",
        lastname: "Garcia",
        email: "AndyGarcia@knights.ucf.edu",
        privilege: 1,
        confirmation: true,
        group: "Senior Design Scheduler"
    },
    {
        id:'3',
        firstname: "Matias",
        lastname: "Lybik",
        email: "Matias Lybik@knights.ucf.edu",
        privilege: 1,
        confirmation: true,
        group: "Senior Design Scheduler"
    },
    {
        id:'4',
        firstname: "Zack",
        lastname: "A",
        email: "ZackA@knights.ucf.edu",
        privilege: 1,
        confirmation: true,
        group: "Senior Design Scheduler"
    },
    {
        id:'5',
        firstname: "Madison",
        lastname: "M",
        email: "Madison@knights.ucf.edu",
        privilege: 1,
        confirmation: true,
        group: "Senior Design Scheduler"
    },
    {
        id:'6',
        firstname: "Calvin",
        lastname: "M",
        email: "Calvin@knights.ucf.edu",
        privilege: 1,
        confirmation: true,
        group: "Senior Design Scheduler"
    },
];

const professors = [
    {
        id:'1',
        firstname: "Matt",
        lastname:"Gerber",
        email:"MGerber@ucf.com",
        privilege:2,
        fieldOfInterest:"Project Management",
        appointments:[
            {
                time:"2022-12-01T09:00:00z",
                group:"Senior Design Scheduler"
            },
            {
                time:"2022-12-01T10:00:00z",
                group:"AI Swarm"
            },
            {
                time:"2022-12-01T11:00:00z",
                group: "MobileApp1"
            }
        ]   
    },
    {
        id:'2',
        firstname: "Rick",
        lastname:"Leinecker",
        email:"Rick@ucf.com",
        privilege:2,
        fieldOfInterest:"Software Development",
        appointments:[
            {
                time:"2022-12-01T09:00:00z",
                group:"Senior Design Scheduler"
            },
            {
                time:"2022-12-01T10:00:00z",
                group:"AI Swarm"
            },
            {
                time:"2022-12-01T11:00:00z",
                group: "MobileApp1"
            }
        ]   
    },
    {
        id:'3',
        firstname: "Arupt",
        lastname:"Guha",
        email:"Guha@ucf.com",
        privilege:2,
        fieldOfInterest:"Cyber Security",
        appointments:[
            {
                time:"2022-12-01T09:00:00z",
                group:"Senior Design Scheduler"
            },
            {
                time:"2022-12-01T10:00:00z",
                group:"AI Swarm"
            },
            {
                time:"2022-12-01T11:00:00z",
                group: "MobileApp1"
            }
        ]   
    }
];

// export both objects
module.exports = {users,professors};