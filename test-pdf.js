// import PDFMerger from 'pdf-merger-js';
// const path = require('path')
const PDFMerger = require('pdf-merger-js')

var merger = new PDFMerger();

const mergePDF = async (p1, p2) => {
  await merger.add(p1)  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 

  // arr.forEach(async (val) => {
  //   await merger.add(path.join(__dirname, val.path))
  //   console.log("added file " + val.originalname)
  // });

  console.log("done")
  const d = new Date().getTime();
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  
  console.log("saved")
  return d;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = mergePDF;
// export default mergePDF;