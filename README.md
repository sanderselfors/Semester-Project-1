## Resources

- [Design](https://www.figma.com/file/RjhyosaJw7DxNIXQpsikxa/Semester-Project-1?node-id=0-1&t=RExIh62ituskl4ng-0)
- [Production deploy](https://sp1sanderselfors.netlify.app/)

## Interview

I interviewed Sofie, a fellow classmate about how she experienced the website:

1. Can you describe your overall experience with the website's design?

- The design is clean and easy to understand. I think the design is appealing and user-friendly. The layout was easy to navigate and the colors are aesthetically pleasing.

2. Were you able to find what you were looking for easily? Why or why not?

- Yes, I was able to find what I was looking for easily. The navigation is simple and easy to understand.

4. Did the website's colors and overall visual design appeal to you? Why or why not?

- Yes, I think the color scheme was consistent throughout the site and the design felt modern and up-to-date.

5. Were there any specific design elements that you found confusing or distracting?

- I found some of the headers on the visit-page to be a little too small compared to the text-paragraphs.

## Report for Intaraction Design

We have been given a course assignment to improve the website we made for either the HTML/CSS CA website, SemesterProject website, or the Javascript CA website using Hotjar to map how users navigate and experience the website. Then perform an interview to further understand the users experience and then make any improvements to the site based on the feedback.

What I found from the Hotjar recordings was that my website was easy to navigate and caused no confusion. Therefore I did little change to the overall design of the website. I learned from the interview that some of my paragraphs and headings was a little difficult to differentiate on smaller screens, so I added som padding here and there to fix this. Then I went over my code and changed some names here and there to improve it. I also added a new CSS file for the contactform and a README.md to improve the folder structure.

Then I moved on to my contact form. Until now it was just HTML and CSS, so I added Javascript with validation to make it better. It initializes variables for each input field and sets up event listeners for validation. When the user submits the form, it prevents the default action and gets the values from the name, email, and message fields. The "validation" function checks if the input field meets specific requirements using regular expressions. If the input is valid, the "submitContactForm" function is called, which sends the form data to a server.

I also perfomed accessibility testing using Chrome Lighthouse and found that the site has an overall high score.

## Report for CMS

In this assignment, I used the WordPress REST API, JavaScript, and CSS to manage and display blogs on my website hosted on Netlify. Instead of hardcoding product data into the HTML, I made API calls with JavaScript to fetch the data dynamically from WordPress. This approach allowed me to create a flexible and dynamic website that can easily update and display blog data.

To implement this, I set up the WordPress REST API on my Flywheel-hosted WordPress website and then, I used JavaScript fetch() method to make HTTP requests to the WordPress REST API and retrieve the blog data. I parsed the JSON response and used JavaScript to dynamically render the data in the HTML, creating HTML elements and appending them to the DOM to display the products. I also applied CSS for styling, customizing the appearance of the displayed products.

This assignment helped me gain a better understanding of Headless CMS, API integration, JavaScript fetch, DOM manipulation, and CSS styling. It allowed me to create a dynamic and flexible blog page that fetches and displays data from WordPress, without hardcoding it into the HTML. This approach makes the site easy to maintain and update, as any updates to the blog data in WordPress will automatically reflect on the website without requiring manual changes to the HTML. Overall, this assignment provided valuable hands-on experience in utilizing the WordPress REST API, JavaScript, and CSS for fetching and displaying data from a Headless CMS, enhancing my web development skills and knowledge.

3. References

I took all my images from Unsplash.
https://unsplash.com/

All the vectors are from icons are from Svgrepo.
https://www.svgrepo.com/

4. Acknowledgements

First I want to thank Monde Sineke for teaching me a lot of good techniques and ways to execute tasks and problems in our classes. It has given me a lot of inspiration. I also want to thank my classmates and the other teachers we have had this semester for help when I was stuck!

5. Appendices

I made a website from the Figma design which is interactive and responsive throughout all the pages. My goal was to make it as easy to use as possible, and to have a nice and cool design. I have explained the reasoning for my methods in the main section above.

## Authors

- Sander Selfors (@sanderselfors)
