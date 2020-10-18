# HelpTag

Learning ways to contribute to a movement or a cause that you see on Twitter


## Overview
Meet HelpTag! A Chrome extension that adds subtle enhancements to your Twitter experience which allows you to quickly browse through actionable, crowdsourced links related to a hashtag that you see on your feed. If a particular hashtag on your feed is being used for a particular movement or cause, our extension would allow you to explore ways you can contribute to what’s going on out there. Categories such as ‘Donate’ and ‘Volunteer’ allow you to browse through links within the contribution method of your liking.



![alt text](https://github.com/varnit15112/HelpTag/blob/main/display.png?raw=true)

![alt text](https://github.com/varnit15112/HelpTag/blob/main/create.png?raw=true)





## Installation Notes

1. Clone the Repository 

-In your terminal, navigate to your main projects folder (e.g. Documents).

-Use this command: ```git clone https://github.com/varnit15112/HelpTag.git```.
-```cd HelpTag```

2. Run a Local Development Server

- Browese to the tempplate, type in 

```cd Templates```
- Initiate a local development server. If you use python, the command is ```python -m SimpleHTTPServer 8000```
- Make sure you run the server on port 8000

3. Add the Chrome Extension to your Browser
- Use the chrome omnibox and navigate to ```chrome://extensions```
- Turn on developer mode
- Load unpacked extension. When prompted, navigate to the HelpTag root director, and upload the folder titled ```Chrome Extension```

4. Go to https://twitter.com/. You can verify that the extension has loaded if the extension logo appears on the text-input Area.

## Feature List 

HelpTag assists you in discovering crowdsourced resources through which you can participate in various movements. The functionality of HelpTag can be seen via the following interactions:
 
1. Finding posts with relevant hashTags: 
-Posts that come in your feed with specific hashtags will be highlighted using the extension. You can view this functionality by searching for terms like ```#MeToo```, ```#BlackLivesMatter```, ```#wildfires``` etc.
-Clicking on the logo opens a popup with a compiled list of resources for the highlighted movement. The links open up relevant websites, posts, meetup forums etc. 

2. Adding resources to crowdsourced database. 
-Contribution to the crowdsourced database of resources also takes place through this extension. You can navigate to an input form by clicking on the logo in the input text area for a new post. The user needs to provide the category of resource, a title, a link, and all relevant hashtags for this resource. 
-Alternatively, you can also navigate to this form by clicking on the help text at the bottom of a resource pop-up. 
