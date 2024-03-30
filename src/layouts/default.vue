<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader />

        <HorseyMcHorseface />

        <div class="flex-grow overflow-auto px-4">
            <DifficultyToggle />

            <div class="prose prose-blue mx-auto">
                <slot />
            </div>
        </div>

        <AppFooter />
    </div>
</template>

