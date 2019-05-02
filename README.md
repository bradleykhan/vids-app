## vids-app

![vids-app demo GIF](https://github.com/bradleykhan/vids-app/blob/master/vids-app.gif "vids-app demo GIF")

This is a primative YouTube clone that provides minimal functionality such as searching for a video using YouTube's data API and being able to select and play a video. Styled with Semantic UI. This app served as a way to learn about and then demonstrate using React.

## Running the app

A YouTube data API key needs to be added to `vids-app/src/api/youtube-key.js`, this file does not currently exist in this repository for obvious reasons. Below is all you need to add to this file.

```
const KEY = "put key here";

export default KEY;
```


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
