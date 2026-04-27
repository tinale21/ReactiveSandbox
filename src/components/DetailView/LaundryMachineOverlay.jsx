export default function LaundryMachineOverlay({ isHovered, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="627 477 43 33"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', cursor: 'pointer' }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <defs>
        <clipPath id="laundry-machine-clip">
          <rect x="627" y="477" width="43" height="33" />
        </clipPath>
      </defs>
      <g clipPath="url(#laundry-machine-clip)">
        <path d="M626.897 477.104C629.145 477.092 635.335 476.847 637.146 477.521C637.202 486.572 637.993 501.146 637.258 509.326C635.343 508.346 633.798 506.504 632.292 504.991C630.598 503.759 628.892 502.286 626.881 501.647C626.68 493.636 626.857 485.147 626.897 477.104Z" fill="#CCCAC8"/>
        <path d="M637.146 477.521C647.792 477.79 658.563 477.534 669.229 477.578C669.133 484.654 669.073 491.73 669.053 498.81C669.049 501.198 668.892 507.223 669.277 509.298C666.238 509.217 663.135 509.017 660.104 509.322L653.352 509.298C648.037 508.981 642.581 509.234 637.258 509.326C637.993 501.146 637.202 486.572 637.146 477.521Z" fill="#FFFFFE"/>
        {isHovered && <rect x="627" y="477" width="43" height="33" fill="white" fillOpacity="0.25" />}
      </g>
    </svg>
  )
}