# @dylanpiriou/simple-lightbox

A simple and accessible lightbox component for React.

## Installation

Install this package using npm:

```shell
npm install @dylanpiriou/simple-lightbox
```

Import the Lightbox component:

```js
import { Lightbox } from "@dylanpiriou/simple-lightbox";
```

You can then render the `Lightbox` component like any other React component in JSX.

```js
const [showLightbox, setShowLightbox] = useState(false);
const openLightbox = () => setShowLightbox(true);
const closeLightbox = () => setShowLightbox(false);

return(
	<div className="flex items-center justify-center min-h-screen bg-gray-100">
		<button onClick={openLightbox} className="btn-primary">Open Lightbox</button>
		<Lightbox show={showLightbox} onClose={closeLightbox}>
			<h2 className="pb-2 text-2xl lg:text-3xl font-semibold">
				Employee created !
			</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing
		    	elit. Quo placeat omnis officia eos temporibus eum
				aspernatur soluta, quaerat, quia sit dolore quod
				nostrum. Perspiciatis voluptas quaerat voluptatem,
				totam accusamus cumque facilis vel nemo veniam est
				sapiente perferendis porro fugit expedita amet
				facere tenetur quia doloribus ad? Deleniti
				voluptatem alias consequuntur!
			</p>
		</Lightbox>
	</div>
);
```
## Props

children: The content to be displayed inside the lightbox. This can be any valid React node, such as elements, strings, or fragments.