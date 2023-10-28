<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader
            class="p-4 mb-4 z-50"
        />

        <div class="content flex-grow overflow-auto px-4">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </div>

        <AppFooter
            class="p-4 mt-4"
        />
    </div>
</template>
