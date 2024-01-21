<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader />

        <div class="flex-grow overflow-auto px-4 py-12">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </div>

        <AppFooter />
    </div>
</template>
