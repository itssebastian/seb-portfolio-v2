import mySQL from "../assets/img/big_data_mysql.JPG"
import cyberSecurity from "../assets/img/cybersecurity.JPG"
import web from "../assets/img/responsive_web_design.JPG"

export const achievementData = {
    bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    achievements : [
        {
            id : 1,
            title : 'Security Certification',
            details : 'Introduction to Cybersecurity & Cyber Attacks',
            date : 'Aug, 2020',
            field : 'Security',
            image : cyberSecurity
        },
        {
            id : 2,
            title : 'Web Design Certification',
            details : 'Responsive Web Design',
            date : 'Sep 28, 2021',
            field : 'Website',
            image : web
        },
        {
            id : 3,
            title : 'MySQL Certification',
            details : 'Managing Big Data with MySQL',
            date : 'Jan 12, 2021',
            field : 'Automation',
            image : mySQL
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/