<script>
export default {
  props: {
      sharingLink: ''
    }
  }

</script>

<template>
  <aside class=" py-4 w-screen inline ">
    <div class=" border-t border-b border-slate-300 "> 
      <!-- Printing CTA  -->
      <div class=" h-20 px-4 flex justify-between items-center  ">
        <span class=" font-bold text-sm xs:text-base ">Help keep friends & family informed by sharing this article</span>
        <button>
          <icons-print class=" w-6 h-6 m-4 " />
        </button>
      </div>

      <!-- Sharing buttons -->
      <div class=" mb-4 mr-3 flex w-full ">
        <base-button class=" mx-3 px-3 flex-1 bg-blue-300 shadow-xl max-w-[230px] ">
          <span>
            <icons-copy class=" w-6 h-6 mr-3 my-3 " />
          </span>
          <span>COPY LINK</span>
        </base-button>
        <base-button class=" flex-1 border-[1.2px] border-blue-300 max-w-[180px] ">
          <span>
            <icons-share class=" w-6 h-6 mr-3 " />
          </span>
          <span>SHARE</span>
        </base-button>
      </div>
    </div>
  </aside>
</template>


