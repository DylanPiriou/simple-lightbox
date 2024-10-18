import * as React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import "./index.css";

/**
 * Lightbox component that displays a modal with a close button.
 */
export function Lightbox({ show, onClose, children }) {
	// If the show prop is false, return null.
	if (!show) {
		return null;
	}

	// Render the lightbox.
	return (
		<div role="lightbox" aria-hidden="true" className="lightbox-overlay">
			<dialog className="lightbox-dialog" role="dialog">
				<div
					className="lightbox-close"
					aria-label="close lightbox"
					onClick={onClose}
				>
					<X />
				</div>
				<div className="lightbox-content">{children}</div>
			</dialog>
		</div>
	);
}
