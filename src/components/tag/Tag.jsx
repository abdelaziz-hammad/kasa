/**
 * Renders a tag button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.tag - The tag text.
 * @returns {JSX.Element} The tag button component.
 */
export default function Tag({ tag }) {

  return (
    <button>
      {tag}
    </button>
  )
}