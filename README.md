# workflow new
shortcut for html boilerplate is "! plus tab key and enter"
Two categories of css measurement
absolute unit and relative unit. Absolute unit are unit that are fixed, they are not affected by screen size or resolution, it cannot be bent. Once an element is defined. For examples of absolutes are "px", "centimeter", "millimeter", "inches", "point", e.t.c. It is not advisable to use "px" when doing for responsive design because it will give lot of problem when you want to manipulate into a smaller screen.
Desktop first approach and mobile first approach.
Bootstrap is a component based css, you input the component you want and it styles it for you and makes it responsive to your screen size, the only modifications bootstraps needs is the color.
Relative Unit are scaled based on the size of an element or the setting you have given to it. Examples include: "em-relative to the font size of the parent container", "rem- is relative to the font size of the root html element". "%- is used to define some kind of things like parent elements such as: images". For rel unit, the defined unit given to the parent element overrides the child element, but when a child element is given a unit, it is divided by the parent element (there are some calculations involved). Viewport is added on html, on meta background.
Don't mix units i.e do not use px, rem. em in one code.


RESPONSIVE DESIGN
This is an approach to web development that  ensure a website layout and content adapt to various screen size and devices including desktop, tablets and smartphone rather than creating multiple versions of the site for each device. It allows you use one design to work across all devices or screen sizes seamlessly or across all platforms seamlessly.
Core principles of responsive design:
1. Flexible,fluid layout (flex box ,or grid layout).
2. Flexible images; images should scale within the grid and not overflow.
3. Media query allows one to write specific styles for particular screen. Conditions to target when writing media query include; width, height, orientation (row/column), font-sizes. Users should be able to access your website at any point in time.
Common screen sizes we have: small, large, tablets, small laptops and desktops. 
Mobile phone- 320px-480px
Tablet-481px- 768px
Small laptops- 769px-1024px
Desktops- 1025px- above

Approaches to web design 
-Desktop approach
-Mobile approach
 The mobile first approach is the best way to start your design, i.e building for mobile screen first before any other one, but one can really start with anyone. 



BOOTSTRAP
Bootstrap: involves copying and pasting, it is a content delivery network. "Class 2, week 5- 43 minutes". It is for fast-paced building. Bootstrap is more rigid.
Tailwind is not rigid, in some cases it gives the flexibility to manipulate some of the styles by writing your own style in it. For instance, tailwind has the whole color embedded in it but you can add your own custom color. Tailwind is familiar to vanilla css and it is written "inline". You have to be very grounded in normal css to  move into tailwind. It involves the whole component of css but it is written inside the html file not as external css file.
It is not as easy in bootstrap with tailwind css.

"you can search for bootstrap5 template". 
The fastest way to go about bootstrap is to know the components you need, check out the template online, download the template file and start using it.

If you are using a color that is not part of bootstrap, what you have to do is give that particular element a class and style it in an external css. If it was tailwind css, you will just have to write out the bg and put the color you want in front of it.
bg-gradient: gives the background color an opacity on our browser.
pt/pb/pl/pr: padding top/ padding bottom/ padding left/ padding right.
vh:height
bg:background

There are 2 ways of using bootstrap:
1. copy the starter template


JAVA SCRIPT

get, post, update or delete


various ways to install html into js