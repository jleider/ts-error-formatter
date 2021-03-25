export const errors: string[] = [
  `Type '{ id: number; email: string; firstName: string; lastName: string; phoneNumber: Option<never>; phoneExtension: Option<never>; company: Option<never>; title: Option<never>; linkedinUrl: Option<never>; twitterUrl: Option<never>; facebookUrl: Option<never>; primaryClientId: number; subscribed: false; personaId: Option<never>; }' is not assignable to type '{ id: number; email: string; firstName: string; lastName: string; phoneNumber: Option<string>; phoneExtension: Option<string>; company: Option<string>; title: Option<string>; linkedinUrl: Option<string>; twitterUrl: Option<string>; facebookUrl: Option<string>; primaryClientId: number; activeCampaignId: Option<string>; personaId: Option<number>; }'.
  Object literal may only specify known properties, and 'subscribed' does not exist in type '{ id: number; email: string; firstName: string; lastName: string; phoneNumber: Option<string>; phoneExtension: Option<string>; company: Option<string>; title: Option<string>; linkedinUrl: Option<string>; twitterUrl: Option<string>; facebookUrl: Option<string>; primaryClientId: number; activeCampaignId: Option<string>; personaId: Option<number>; }'.`,

  `Type '{ mySiteItems: Parser<PageMeta<{}>>; mySiteOffering: Parser<PageMeta<{}>>; mySiteItemsRatings: Parser<PageMeta<{}>>; mySiteItemsRoadshows: Parser<PageMeta<{}>>; mySiteDocuments: Parser<PageMeta<{ page?: number | undefined; search?: string | undefined; category?: number | undefined; sortBy?: "title-asc" | "category-asc" | "date-asc" | "date-desc" | undefined; emma?: "all" | "emmaOnly" | "excludeEmma" | undefined; archive?: "all" | "archiveOnly" | "excludeArchive" | undefined; privacy?: "all" | "public" | "private" | undefined; }>>; mySiteDocumentsCategories: Parser<PageMeta<{}>>; mySiteDocumentsLetter: Parser<PageMeta<{}>>; mySiteChangeApproval: Parser<PageMeta<{}>>; tipsAndToolsPersonalizedTips: Parser<any>; tipsAndToolsBestPractices: Parser<any>; tipsAndToolsUserGuides: Parser<any>; analyticsDocumentStatistics: Parser<any>; analyticsSiteActivity: Parser<any>; analyticsDocumentStatisticsDocumentActivity: Parser<any>; analyticsUserActivity: Parser<any>; analyticsUserActivityDetails: Parser<any>; analyticsDebriefs: Parser<any>; Insights: Parser<PageMeta<{ id: number; } & { preview: boolean; }>>; InsightsQuery: Parser<PageMeta<{ page?: number | undefined; publisher?: number | undefined; }>>; dashboard: Parser<PageMeta<{}>>; }' is not assignable to type '{ readonly dashboard: Parser<PageMeta<unknown>>; readonly analyticsDocumentStatistics: Parser<PageMeta<unknown>>; readonly analyticsDocumentStatisticsDocumentActivity: Parser<PageMeta<unknown>>; readonly analyticsDebriefs: Parser<PageMeta<unknown>>; readonly analyticsSiteActivity: Parser<PageMeta<unknown>>; readonly analyticsUserActivity: Parser<PageMeta<unknown>>; readonly analyticsUserActivityDetails: Parser<PageMeta<unknown>>; readonly Insights: Parser<PageMeta<unknown>>; readonly mySiteItems: Parser<PageMeta<unknown>>; readonly mySiteOffering: Parser<PageMeta<unknown>>; readonly mySiteItemsRatings: Parser<PageMeta<unknown>>; readonly mySiteItemsRoadshows: Parser<PageMeta<unknown>>; readonly mySiteChangeApproval: Parser<PageMeta<unknown>>; readonly mySiteDocuments: Parser<PageMeta<unknown>>; readonly mySiteDocumentsCategories: Parser<PageMeta<unknown>>; readonly mySiteDocumentsLetter: Parser<PageMeta<unknown>>; readonly tipsAndToolsBestPractices: Parser<PageMeta<unknown>>; readonly tipsAndToolsPersonalizedTips: Parser<PageMeta<unknown>>; readonly tipsAndToolsUserGuides: Parser<PageMeta<unknown>>; }'.
  Types of property 'dashboard' are incompatible.
    Type 'Parser<PageMeta<{}>>' is not assignable to type 'Parser<PageMeta<unknown>>'.
      Type 'PageMeta<{}>' is not assignable to type 'PageMeta<unknown>'.
        Type 'PageMeta<{}>' is not assignable to type '{ readonly description: () => Option<string>; readonly renderEquality: (next: PageMeta<unknown>, current: PageMeta<unknown>) => boolean; readonly dataMeta: Option<DataMetaBase<string>>; readonly route: Match<unknown>; }'.
          Types of property 'renderEquality' are incompatible.
            Type '(next: PageMeta<{}>, current: PageMeta<{}>) => boolean' is not assignable to type '(next: PageMeta<unknown>, current: PageMeta<unknown>) => boolean'.
              Types of parameters 'next' and 'next' are incompatible.
                Type 'PageMeta<unknown>' is not assignable to type 'PageMeta<{}>'.
                  Type 'PageMeta<unknown>' is not assignable to type '{ readonly description: () => Option<string>; readonly renderEquality: (next: PageMeta<{}>, current: PageMeta<{}>) => boolean; readonly dataMeta: Option<DataMetaBase<string>>; readonly route: Match<{}>; }'.
                    The types of 'route.parser' are incompatible between these types.
                      Type 'Parser<unknown>' is not assignable to type 'Parser<{}>'.
                        Type 'unknown' is not assignable to type '{}'.ts(2322)`,
  `Type '{ id: number; email: string; firstName: string; lastName: string; phoneNumber: Option<never>; phoneExtension: Option<never>; company: Option<never>; title: Option<never>; linkedinUrl: Option<never>; twitterUrl: Option<never>; facebookUrl: Option<never>; primaryClientId: number; subscribed: false; personaId: Option<never>; }' is not assignable to type '{ id: number; email: string; firstName: string; lastName: string; phoneNumber: Option<string>; phoneExtension: Option<string>; company: Option<string>; title: Option<string>; linkedinUrl: Option<string>; twitterUrl: Option<string>; facebookUrl: Option<string>; primaryClientId: number; activeCampaignId: Option<string>; personaId: Option<number>; }'.
    Object literal may only specify known properties, and 'subscribed' does not exist in type '{ id: number; email: string; firstName: string; lastName: string; phoneNumber: Option<string>; phoneExtension: Option<string>; company: Option<string>; title: Option<string>; linkedinUrl: Option<string>; twitterUrl: Option<string>; facebookUrl: Option<string>; primaryClientId: number; activeCampaignId: Option<string>; personaId: Option<number>; }'.

  Type 'Codec<Option<number>, Option<number> | null | undefined>' is not assignable to type 'Codec<number, number | null | undefined>'.
    The types returned by 'decode(...)' are incompatible between these types.
      Type 'Validation<Option<number>>' is not assignable to type 'Validation<number>'.
        Type 'Right<Option<number>>' is not assignable to type 'Validation<number>'.
          Type 'Right<Option<number>>' is not assignable to type 'Right<number>'.
            Type 'Option<number>' is not assignable to type 'number'.
              Type 'None' is not assignable to type 'number'.`
];
