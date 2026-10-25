<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header class="mb-8 flex flex-col gap-3">
        <p class="text-sm uppercase tracking-[0.3em] text-slate-500">AI Skills</p>
        <h1 class="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Your developer assistant</h1>
        <p class="max-w-2xl text-slate-600">Select one of the skills below and send a prompt to the AI backend. The app is designed to add new skills without rewriting the main page.</p>
      </header>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
