/* eslint-disable react/jsx-key */
import * as React from "react"
import { createIcon } from "@chakra-ui/react"

import { commonIconDefaultProps } from "../utils"

export const ERC20SupportIcon = createIcon({
  displayName: "ERC20SupportIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: [
    <path d="M133.335 94.5138C133.335 91.5674 130.947 89.1788 128 89.1788C125.054 89.1788 122.665 91.5674 122.665 94.5138V142.085L103.632 123.051C101.548 120.968 98.1704 120.968 96.087 123.051C94.0036 125.135 94.0036 128.513 96.087 130.596L124.201 158.711L124.228 158.737C125.167 159.676 126.369 160.192 127.598 160.284C127.989 160.314 128.385 160.301 128.777 160.243C129.703 160.107 130.599 159.729 131.363 159.106C131.522 158.978 131.672 158.84 131.814 158.695L159.913 130.596C161.997 128.513 161.997 125.135 159.913 123.051C157.83 120.968 154.452 120.968 152.368 123.051L133.335 142.084V94.5138Z" />,
    <path d="M117.06 55.8875C123.432 50.7042 132.567 50.7042 138.939 55.8875L143.477 59.5788C144.95 60.7773 146.865 61.2904 148.74 60.9891L154.515 60.0612C162.625 58.7582 170.536 63.3256 173.463 71.0004L175.547 76.466C176.223 78.2406 177.625 79.6423 179.4 80.319L184.865 82.403C192.54 85.3295 197.107 93.2406 195.804 101.35L194.877 107.126C194.575 109.001 195.088 110.916 196.287 112.389L199.978 116.927C205.161 123.298 205.161 132.433 199.978 138.805L196.287 143.343C195.088 144.816 194.575 146.731 194.877 148.606L195.804 154.381C197.107 162.491 192.54 170.402 184.865 173.329L179.4 175.413C177.625 176.09 176.223 177.491 175.547 179.266L173.463 184.731C170.536 192.406 162.625 196.974 154.515 195.671L148.74 194.743C146.865 194.441 144.95 194.954 143.477 196.153L138.939 199.844C132.567 205.028 123.432 205.028 117.06 199.844L112.523 196.153C111.049 194.954 109.135 194.441 107.26 194.743L101.484 195.671C93.3743 196.974 85.4633 192.406 82.5368 184.731L80.4528 179.266C79.7761 177.491 78.3744 176.09 76.5998 175.413L71.1342 173.329C63.4594 170.402 58.8919 162.491 60.195 154.381L61.1229 148.606C61.4242 146.731 60.9111 144.816 59.7126 143.343L56.0213 138.805C50.8379 132.433 50.8379 123.298 56.0213 116.927L59.7126 112.389C60.9111 110.916 61.4242 109.001 61.1229 107.126L60.195 101.35C58.8919 93.2406 63.4594 85.3295 71.1342 82.403L76.5998 80.319C78.3744 79.6423 79.7761 78.2406 80.4528 76.466L82.5368 71.0004C85.4633 63.3256 93.3743 58.7582 101.484 60.0612L107.26 60.9891C109.135 61.2904 111.049 60.7773 112.523 59.5788L117.06 55.8875ZM132.206 64.1647C129.756 62.1718 126.244 62.1718 123.794 64.1647L119.256 67.856C115.424 70.9732 110.444 72.3076 105.567 71.524L99.7916 70.5961C96.6735 70.0951 93.6318 71.8512 92.5066 74.802L90.4226 80.2676C88.6626 84.8832 85.017 88.5288 80.4014 90.2888L74.9358 92.3728C71.985 93.498 70.2289 96.5397 70.7298 99.6578L71.6578 105.433C72.4414 110.31 71.107 115.29 67.9897 119.122L64.2985 123.66C62.3056 126.11 62.3056 129.622 64.2985 132.072L67.9897 136.609C71.107 140.442 72.4414 145.421 71.6578 150.299L70.7298 156.074C70.2289 159.192 71.985 162.234 74.9358 163.359L80.4014 165.443C85.017 167.203 88.6626 170.849 90.4226 175.464L92.5066 180.93C93.6318 183.881 96.6735 185.637 99.7916 185.136L105.567 184.208C110.444 183.424 115.424 184.759 119.256 187.876L123.794 191.567C126.244 193.56 129.756 193.56 132.206 191.567L136.743 187.876C140.575 184.759 145.555 183.424 150.433 184.208L156.208 185.136C159.326 185.637 162.368 183.881 163.493 180.93L165.577 175.464C167.337 170.849 170.982 167.203 175.598 165.443L181.064 163.359C184.014 162.234 185.771 159.192 185.27 156.074L184.342 150.299C183.558 145.421 184.892 140.442 188.01 136.609L191.701 132.072C193.694 129.622 193.694 126.11 191.701 123.66L188.01 119.122C184.892 115.29 183.558 110.31 184.342 105.433L185.27 99.6578C185.771 96.5397 184.014 93.498 181.064 92.3728L175.598 90.2888C170.982 88.5288 167.337 84.8832 165.577 80.2676L163.493 74.802C162.368 71.8512 159.326 70.0951 156.208 70.5961L150.433 71.524C145.555 72.3076 140.575 70.9732 136.743 67.856L132.206 64.1647Z" />,
  ],
})
