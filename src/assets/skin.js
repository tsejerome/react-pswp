export default color =>
  `
<svg
  width="264"
  height="88"
  viewBox="0 0 264 88"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>default-skin 2</title>
  <g
    fill="none"
    fill-rule="evenodd"
  >
    <g>
      <path
        d="M67.002 59.5v3.768c-6.307.84-9.184 5.75-10.002 9.732 2.22-2.83 5.564-5.098 10.002-5.098V71.5L73 65.585 67.002 59.5z"
        id="Shape"
        fill="${color}"
      />
      <g fill="${color}">
        <path
          d="M13 29v-5h2v3h3v2h-5zM13 15h5v2h-3v3h-2v-5zM31 15v5h-2v-3h-3v-2h5zM31 29h-5v-2h3v-3h2v5z"
          id="Shape"
        />
      </g>
      <g fill="${color}">
        <path d="M62 24v5h-2v-3h-3v-2h5zM62 20h-5v-2h3v-3h2v5zM70 20v-5h2v3h3v2h-5zM70 24h5v2h-3v3h-2v-5z" />
      </g>
      <path
        d="M20.586 66l-5.656-5.656 1.414-1.414L22 64.586l5.656-5.656 1.414 1.414L23.414 66l5.656 5.656-1.414 1.414L22 67.414l-5.656 5.656-1.414-1.414L20.586 66z"
        fill="${color}"
      />
      <path
        d="M111.785 65.03L110 63.5l3-3.5h-10v-2h10l-3-3.5 1.785-1.468L117 59l-5.215 6.03z"
        fill="${color}"
      />
      <path
        d="M152.215 65.03L154 63.5l-3-3.5h10v-2h-10l3-3.5-1.785-1.468L147 59l5.215 6.03z"
        fill="${color}"
      />
      <g>
        <path
          id="Rectangle-11"
          fill="${color}"
          d="M160.957 28.543l-3.25-3.25-1.413 1.414 3.25 3.25z"
        />
        <path
          d="M152.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z"
          id="Oval-1"
          stroke="${color}"
          stroke-width="1.5"
        />
        <path
          fill="${color}"
          d="M150 21h5v1h-5z"
        />
      </g>
      <g>
        <path
          d="M116.957 28.543l-1.414 1.414-3.25-3.25 1.414-1.414 3.25 3.25z"
          fill="${color}"
        />
        <path
          d="M108.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z"
          stroke="${color}"
          stroke-width="1.5"
        />
        <path
          fill="${color}"
          d="M106 21h5v1h-5z"
        />
        <path
          fill="${color}"
          d="M109.043 19.008l-.085 5-1-.017.085-5z"
        />
      </g>
    </g>
  </g>
</svg>
`
    .replace(/"/g, "'")
    .replace(/>\s{1,}</g, '><')
    .replace(/\s{2,}/g, ' ')
    .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);

export const leftArrow = `<svg width="34" height="58" viewBox="0 0 34 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 29L1.49728 28.4434L0.881074 29L1.49728 29.5566L2 29ZM32.4973 0.443423L1.49728 28.4434L2.50271 29.5566L33.5027 1.55658L32.4973 0.443423ZM1.49728 29.5566L32.4973 57.5566L33.5027 56.4434L2.50271 28.4434L1.49728 29.5566Z" fill="#868686"/>
</svg>`
  .replace(/"/g, "'")
  .replace(/>\s{1,}</g, '><')
  .replace(/\s{2,}/g, ' ')
  .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);

export const rightArrow = `<svg width="34" height="58" viewBox="0 0 34 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 29L32.5027 29.5566L33.1189 29L32.5027 28.4434L32 29ZM1.50271 57.5566L32.5027 29.5566L31.4973 28.4434L0.497284 56.4434L1.50271 57.5566ZM32.5027 28.4434L1.50272 0.443422L0.49729 1.55657L31.4973 29.5566L32.5027 28.4434Z" fill="#868686"/>
</svg>`
  .replace(/"/g, "'")
  .replace(/>\s{1,}</g, '><')
  .replace(/\s{2,}/g, ' ')
  .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);

export const cross = `<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.25 11.75L11.75 35.25" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.75 11.75L35.25 35.25" stroke="#868686" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
  .replace(/"/g, "'")
  .replace(/>\s{1,}</g, '><')
  .replace(/\s{2,}/g, ' ')
  .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
