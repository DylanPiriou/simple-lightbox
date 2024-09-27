import * as React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import "./index.css";

export function Lightbox({ children }) {
	const [showLightbox, setShowLightbox] = useState(true);
	const closeLightbox = () => {
		setShowLightbox(false);
	};

	return (
		<React.Fragment>
			{showLightbox && (
				<div
					role="lightbox"
					aria-hidden="true"
					className="lightbox-overlay"
				>
					<dialog className="lightbox-dialog">
						<div
							className="lightbox-close"
							aria-label="close lightbox"
							onClick={() => closeLightbox()}
						>
							<X />
						</div>
						<div className="lightbox-content">{children}</div>
					</dialog>
				</div>
			)}
		</React.Fragment>
	);
}
