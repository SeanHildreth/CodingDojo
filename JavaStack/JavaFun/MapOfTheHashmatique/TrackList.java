import java.util.*;
public class TrackList {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("Polyamorous", "Let's go The day has come to an end The sun is over my head My polyamorous friend He got me in a mess of trouble again So Just when you think that you're all right I'm calling out from the inside I never hurt anyone I never listen at all They've come to get me again The cloud is over my head My polyamorous friend He got me in a mess of trouble again So Just when you think that you're all right I'm calling out from the inside I never hurt anyone I never listen at all Just stay away from the white light I'd say your worst side's your best side I never hurt anyone I never listen at all Well how do you know? Well how do you know? Well how do you know? Well how do you know? Just when you think that you're all right I'm calling out from the inside I never hurt anyone I never listen at all Just stay away from the white light I'd say your worst side's your best side I never hurt anyone I never listen at all Let's go");
        trackList.put("Medicate", "I got somethin' up my sleeve I know you will cover me Inside out and in between I know you will cover me I've got bruises on my knees I know you will cover me Inside out and in between And I know you will cover me [Chorus:] Run away Make hate And get laid And get laid You tie me up I've had enough So medicate Medicate I'm already incomplete I know you will cover me Looking by your empathy I know you will cover me I've been lyin' here for weeks I know you will cover me Inside out and in between And I know you will cover me");
        trackList.put("Ashes of Eden", "Will the faithful be rewarded When we come to the end Will I miss the final warning From the lie that I have lived Is there anybody calling I can see the soul within And I am not worthy I am not worthy of this Are you with me after all Why can't I hear you Are you with me through it all Then why can't I feel you Stay with me, don't let me go Because there's nothing left at all Stay with me, don't let me go Until the Ashes of Eden fall Will the darkness fall upon me When the air is growing thin Will the light begin to pull me To its everlasting will I can hear the voices haunting There is nothing left to fear And I am still calling I am still calling to you Are you with me after all Why can't I hear you Are you with me through it all Then why can't I feel you Stay with me, don't let me go Because there's nothing left at all Stay with me, don't let me go Until the Ashes of Eden fall Don't let go Why can't I hear you Stay with me, don't let me go Because there's nothing left at all Stay with me, don't let me go Until the Ashes of Eden fall Heaven above me, take my hand (Stay with me, don't let me go) Shine until there's nothing left but you Heaven above me, take my hand (Stay with me, don't let me go) Shine until there's nothing left but you");
        trackList.put("Red Cold River", "Days reborn Fight with folded hands Pain left below The lifeless live again Run, run, run Red cold river Run, run, run Red cold river I can't feel anything at all This life has left me cold and damned I can't feel anything at all This love has led me to the end Stay reformed Erase this perfect world Hate left below The dark stray dog of war Run, run, run Red cold river I can't feel anything at all This life has left me cold and damned I can't feel anything at all This love has led me to the end Try to find a reason to live Try to find a reason to live Try to find a reason to live I can't feel anything at all (Try to find a reason to live) This life has left me cold and damned (Try to find a reason to live) I can't feel anything at all This love has led me to the end Run, run, run Red cold river");
        String track = trackList.get("Polyamorous");
        Set<String> keys = trackList.keySet();
        for (String key : keys) {
            System.out.println(key + ": " + trackList.get(key));
        }
    }
}
