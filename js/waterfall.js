/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: "https://youtu.be/KE1BUN1AM4M",
      img_link: '../asset/img/mimic.png',
      code_link: "https://github.com/hoyinchu/MortalityPrediction",
      title: 'Improving Mortality Prediction using Text Embeddings',
      core_tech: 'Huggingface, Sklearn, Python',
      description: "Improve models by embedding doctor\'s note through BERT"
    },
    {
      demo_link: 'https://github.com/cmarcum/DAC-Report',
      img_link: '../asset/img/dac_reporting_tool_icon.png',
      code_link: 'https://github.com/cmarcum/DAC-Report',
      title: 'DAC Reporting Tool',
      core_tech: 'R',
      description: 'A data pipeline for automatic report generation'
    },
    {
      demo_link: "https://www.chewy.com/american-journey-salmon-sweet-potato/dp/135821",
      img_link: '../asset/img/chewy_logo.jpeg',
      code_link: "https://www.chewy.com/american-journey-salmon-sweet-potato/dp/135821",
      title: 'Chewy',
      core_tech: 'Javascript, Vue, Java, Kotlin',
      description: 'Developed new components for the Product Display Page and Home Page'
    },
    {
      demo_link:'https://github.com/hoyinchu/ProteomicsResearch',
      img_link: '../asset/img/hemoglobin_quaternary.png',
      code_link: 'https://github.com/hoyinchu/ProteomicsResearch',
      title: 'Proteomics Research',
      core_tech: 'Python, R',
      description: 'A WIP collection of notebooks that explores proteomic datasets'
    },
    {
      demo_link: 'https://github.com/hoyinchu/RockClimbingProblemClassifier',
      img_link: '../asset/img/sample_moonboard_problem.png',
      code_link: 'https://github.com/hoyinchu/RockClimbingProblemClassifier',
      title: 'Rock Climbing Problem Classifier',
      core_tech: 'Python, Javascript, Pytorch, Scikit-learn',
      description: 'Determining the difficulty of a rock climbing route, from Naive Bayes to CNN'
    },
    {
      demo_link: 'https://github.com/hoyinchu/biolink',
      img_link: '../asset/img/biolink.png',
      code_link: 'https://github.com/hoyinchu/biolink',
      title: 'Biolink',
      core_tech: 'Neo4j, Python',
      description: 'A database of networked biological knowledge'
    },
    {
      demo_link: 'https://github.com/hoyinchu/Evolutionary-Dynamics/blob/master/Evolutionary%20Dynamics%20Final%20Presentation.pdf',
      img_link: '../asset/img/EvolutionaryDynamic.png',
      code_link: 'https://github.com/hoyinchu/Evolutionary-Dynamics/blob/master/Hoyin%20Chu%20--%20Introduction%20to%20Evolutionary%20Dynamics%20and%20Stochastic%20Calculus.pdf',
      title: 'Evolutionary Dynamic',
      core_tech: 'Network, Graph Theory, Python, Statistic',
      description: 'First REU Experience. Paper included'
    },
    {
      demo_link: 'https://play.google.com/store/apps/details?id=hoyinpersonal.npcompletelibrary&hl=en_US',
      img_link: '../asset/img/np_complete_library_cover.png',
      code_link: 'https://github.com/hoyinchu/NP-Complete-Library-App',
      title: 'NP Complete Library',
      core_tech: 'Java',
      description: 'An app I made back when Java was the only language I knew. Available ads free on Google Play Store!'
    },
    {
      demo_link: 'https://youtu.be/8aQmOaVt7j0',
      img_link: '../asset/img/osu.png',
      code_link: 'https://github.com/hoyinchu/Osu-Beatmap-Analysis',
      title: 'Osu Beatmap Popularity Analysis',
      core_tech: 'R, SQL',
      description: 'My first ever data science project'
    },
    {
      demo_link: 'https://hoyinchu.github.io/demo/',
      img_link: '../asset/img/demo.png',
      code_link: 'https://github.com/hoyinchu/hoyinchu.github.io',
      title: 'Hoyin\'s Personal Website',
      core_tech: 'Markdown',
      description: 'This site'
    }

  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>Tech: ' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">Source Code <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
