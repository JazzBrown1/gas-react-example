# gas-react Hello World Example

This is a simple HelloWorld example using the npm package gas-react to bundle a react app into Google App Scripts friendly code.

Please see the NPM package page for more details about gas-react.


Clone the repo to your local
~~~
git clone https://github.com/JazzBrown1/gas-react-example
~~~

Run the build script
~~~
npm run build
~~~

Change the working directory to the clasp directory
~~~
cd clasp
~~~

Create a google app scripts project

~~~
clasp create --type webapp
~~~

Select 'Webapp'in the CLI

Push the bundled code to Google App Scripts using clasp and open your project
~~~
clasp push
clasp open
~~~

This will open your project in the browser.

Due to an issue with clasp the following steps needs to be done in the Google UI (https://github.com/google/clasp/issues/63)

Select Publish > Deploy as web app

Click deploy in the modal

Follow the link to see your deployed Web App in the browser
