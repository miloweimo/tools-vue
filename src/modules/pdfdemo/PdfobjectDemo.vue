<template>
  <div>
    <h1>PdfobjectDemo</h1>
    <a href="https://pdfobject.com/">https://pdfobject.com/</a>
    <div
      id="example1"
      style="border: 1px solid red;"
    />
  </div>
</template>

<script>
import PDFObject from 'pdfobject'

export default {
  mounted() {
    PDFObject.embed("3.pdf", "#example1");
  },
}
</script>

<style>
/* Only resize the element if PDF is embedded */
.pdfobject-container {
  width: 500px;
  height: 500px;
}
</style>